import GroceryList from "../components/lists/groceryList";
import { useState } from "react";

export default function GroceryListPage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="my-3 d-center fs-1">Lista della spesa</div>
          <GroceryList />
        </div>
      </div>
    </>
  );
}
