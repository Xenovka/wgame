import { User } from "firebase/auth";
import { SignInWithGoogle, SignOut } from "../../../auth/AuthService";
import { useGameStore } from "../../../store/GameStore";

const useNavBar = () => {
    const { userCredentials, updateUserCredentials } = useGameStore();

    const signInWithGoogle = async () => {
        try {
            const user = await SignInWithGoogle();

            updateUserCredentials(user as User);
        } catch (error) {
            updateUserCredentials(null);

            console.error(error);
        }
    };

    const signOut = async () => {
        try {
            console.log("Signed out.");

            await SignOut();

            updateUserCredentials(null);
        } catch (error) {
            console.error(error);
        }
    };

    return {
        userCredentials,
        signInWithGoogle,
        signOut
    };
};

export default useNavBar;
