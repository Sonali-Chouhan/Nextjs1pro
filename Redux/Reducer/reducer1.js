import { addUser,userdelete,userupdate } from "../Type";
const initialState = {
  List: [{
    id:'0',
    firstName:"Sonali",
    lastName:"Chouhan",
    email:"sona@gmail.com",
    password:"1111",
    phone:5655555555
  },
  {
    id:'1',
    firstName:"text",
    lastName:"Text",
    email:"text@gmail.com",
    password:"00000",
    phone:5655577889
  }
],
};
export const reducer = function (state = initialState, action) {
  console.log("reducer1-action", action);
  switch (action.type) {

    case addUser:
      var data=state.List
      data.push(action.payload)
      return {
        ...state,
        List:data
      };

    case userdelete:
      const list=state.List
      list.splice(action.payload,1)
      return {
        ...state,
        List:[...list]
    };
    

    case userupdate:
      console.log("reducer-id",action.payload)
      console.log("jjjjjj",action.id)
      const object=state.List
     
          object.splice(action.id,1,{
            firstName:action.payload.firstName,
            lastName:action.payload.lastName,
            email:action.payload.email,
            phone:action.payload.phone
            
          })
      return {
        ...state,
        List:[...object]
      };
    
    default:
      return state;
  }
};
