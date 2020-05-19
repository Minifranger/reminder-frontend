import React, { useState } from "react";
import { Card, Button, ListGroup, Navbar } from "react-bootstrap";
import Today from "../components/navbar/Today";
import Add from "../components/navbar/Add";

export default function Top() {

  return (
    <>
      <Navbar bg="dark" variant="dark" className="justify-content-between" collapseOnSelect>
        <Today/>
        <Add/>
      </Navbar>
    </>
  );
}
