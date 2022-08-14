import React,{ useState, useEffect} from "react";
import '../firebase';
import {getAuth, 
    createUserWithEmailAndPassword, 
    updateProfile, 
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth(){
    return React.useContext(AuthContext);
}

export function AuthProvider({children}){
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(()=>{
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    },[]);

    //Sign Up with email and password
    async function signup(email,password, username){
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);
        //profile update
        await updateProfile(auth.currentUser, {displayName: username});
        const user = auth.currentUser;
        setCurrentUser({...user,});

    }
    //Log In with email and password
    function login(email,password){
        const auth = getAuth();
        return signInWithEmailAndPassword(auth,email, password);
    }

    //Log Out
    function logout(){
        const auth = getAuth();
        return signOut(auth);
    }
    
    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}