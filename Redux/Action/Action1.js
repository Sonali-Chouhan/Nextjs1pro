import {addUser,userdelete,userupdate} from "../Type";

export const AddUser=(data)=>{
   
    
    return{
        type: addUser,
        payload:data
}
};
export const UserRemove=(id)=>{
    
    return{
        type:userdelete,
        payload:id
    }

}
export const UserUpdate=(data,id)=>{
    
    return{
        type:userupdate,
        payload:data,
        id
    }
}
