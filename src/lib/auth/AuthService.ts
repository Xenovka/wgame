import { signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import { auth, provider } from "../../config";

export const SignIn = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
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
