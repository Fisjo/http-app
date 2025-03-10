import { userModelToLocalhost } from "../mappers/user-to-localhost.maper";
import { User } from "../models/user";



/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async(userLike) => {

    if (!user.firstName || !user.lastName) {
        throw 'First and last name are required'; 
    }

    let user = new User(userLike); 

    const userToSave = userModelToLocalhost(user); 

    if (user.id) {
        throw new Error("No implementado");
    }

    const updatedUser = await createUser(userToSave);
    return updatedUser;
} 

/**
 * 
 * @param {Like<User>} user 
 */
const createUser = async( user ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newUser = await res.json();
    console.log({ newUser });

    return newUser;

}