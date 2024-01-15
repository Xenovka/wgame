import { inMemoryPersistence, setPersistence, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../config";

setPersistence(auth, inMemoryPersistence)
    .then(() => {
        return signInWithPopup(auth, provider);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error(errorMessage, errorCode);
    });

export const SignInWithGoogle = async () => {
    try {
        if (auth.currentUser) {
            console.log("Already signed in.");
            return auth.currentUser;
        }

        console.log("Signed in.");

        const result = await signInWithPopup(auth, provider);
        return result.user;
    } catch (error) {
        console.error(error);
    }
};

export const SignOut = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error(error);
    }
};
