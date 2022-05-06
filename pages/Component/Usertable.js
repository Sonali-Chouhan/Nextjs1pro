import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table } from "react-bootstrap";
import Link from "next/link";
import { UserRemove } from "../../Redux/Action/Action1";
import Router from "next/router";

const Usertable = () => {

  const data = useSelector((state) => state.reducer.List);

  const dispatch = useDispatch();

  console.log("jj", data);

  const handleDelete = (id) => {
    dispatch(UserRemove(id));
  };

  const handleEdit = (id) => {
    Router.push({
      pathname: "/Component/Userform",
      query: { id: id },
    });
  };

  useEffect(() => {}, [data]);

  return (
    <div>
      <Link href="/">Bact to Home</Link>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th colSpan={2}>Actiom</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((x, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{x.firstName}</td>
                <td>{x.lastName}</td>
                <td>{x.email}</td>
                <td>{x.phone}</td>
                <td>
                  <Button variant="warning" onClick={() => handleDelete(index)}>Delete</Button>
                </td>
                <td>
                  <Button variant="info" onClick={() => handleEdit(index)}>Edit</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Usertable;
