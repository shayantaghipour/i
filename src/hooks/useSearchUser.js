import { useState } from 'react';
import useShowToast from './useShowToast';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

const useSearchUser = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const showToast = useShowToast(); // فرض می‌کنم این toast خطا رو نشون می‌ده

    const getUserProfile = async (username) => {
        if (!username) return;

        setIsLoading(true); // اینجا باید لودینگ رو true کنی

        try {
            const q = query(
                collection(firestore, 'users'), // ← اطمینان از درست بودن نام کالکشن
                where('username', '==', username)
            );

            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                showToast('کاربری با این نام پیدا نشد', 'error');
                setUser(null);
                return;
            }

            // چون فقط یکی پیدا می‌کنی:
            const foundUser = querySnapshot.docs[0].data();
            setUser(foundUser);
        } catch (error) {
            console.error("Firestore Error:", error.message);
            showToast('مشکلی در دریافت اطلاعات رخ داد', 'error');
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    };

    // 👇 حالا return کن تا بتونی تو کامپوننت‌ها استفاده کنی
    return { getUserProfile, user, isLoading };
};

export default useSearchUser;
