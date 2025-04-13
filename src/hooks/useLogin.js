import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';
import { auth, firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const useLogin = () => {
  const [
    signInwithEmailAndPassword,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const loginUser = useAuthStore((state) => state.login);


  const login = async (inputs) => {
    if (!inputs.email || !inputs.password) {
      return console.log("error");
    }
    try {
      const userCred = await signInwithEmailAndPassword(inputs.email, inputs.password);

      if (userCred) {
        const docRef = doc(firestore, "users", userCred.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
        loginUser(docSnap.data());
      }

    } catch (error) {
      showToast("Error", error.message, "error")
    }
  }
  return { loading, error, login };
};


export default useLogin