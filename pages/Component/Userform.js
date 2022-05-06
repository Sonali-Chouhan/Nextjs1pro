import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AddUser, UserUpdate } from "../../Redux/Action/Action1";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "react-bootstrap";

const Userform = () => {
  const dispatch = useDispatch();

  const router = useRouter();

  const items = useSelector((state) => state.reducer?.List);
  console.log("items", items);

  const { id } = router.query;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    if (id) {
      dispatch(UserUpdate(data, id));
    } else {
      dispatch(AddUser(data));
    }

    router.push("/Component/Usertable");
  };
  useEffect(() => {
    const record = items[id];
    if (record) {
      setValue("firstName", record.firstName),
        setValue("lastName", record.lastName),
        setValue("email", record.email);
      setValue("phone", record.phone);
    }
  }, [id]);
  const handleCancel = () => {
    if (id) {
      window.location.href = "/Component/Userform";
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleRegister)}>
        <input
          type="text"
          name="firstName"
          placeholder="Enter User Name"
          {...register("firstName", {
            required: true
          })}
        />
        <br></br>
        <p className="error">
          {" "}
          {errors.firstName?.type==="required" && <p>FirstName Required :-)</p>}
        </p>
        

        <input
          type="text"
          name="lastName"
          placeholder="Enter User Last"
          {...register("lastName", { required: true })}
        />
        <br></br>
        <p>{errors.lastName && <p>LastName Required :-)</p>}</p>
        

        <input
          type="text"
          name="email"
          placeholder="Enter User Email"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            },
          })}
        />
        <br></br>
        <p>{errors.email && <p>Email Required :-)</p>}</p>
        <p className="error">
          {errors.email?.type === "pattern" && "must add Valid email"}
        </p>
        <input
          type="text"
          name="password"
          placeholder="Enter password"
          {...register("password", { required: true })}
        />
        <br></br>
        <p>{errors.password && <p>Password Required :-)</p>}</p>
        <input
          type="number"
          name="number"
          placeholder="Enter phone"
          {...register("phone", { required: true })}
        />
        <br></br>
        <p>{errors.phone && <p>Phone Required :-)</p>}</p>
        {id ? (
          <>
            <span>
              <Button type="submit" variant="info">
                Save
              </Button>
              <Button
                type="reset"
                variant="danger"
                onClick={() => handleCancel()}
              >
                Cancel
              </Button>
            </span>
          </>
        ) : (
          <>
            <Button type="submit" variant="success">
              Submit
            </Button>
          </>
        )}
      </form>
      <Link href="/">Bact to Home</Link>
    </div>
  );
};

export default Userform;
