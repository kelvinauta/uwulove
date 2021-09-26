// ** @jsx jsx *
import React, { useState } from "react";
import { jsx, Text, Button } from "theme-ui";
import data from "../devdata/data";
import Page from "./Page";
const Book = () => {
  const devVarPageCodeInitial = data.books[0].pages[0].code;
  const [pageCode, setPageCode] = useState(devVarPageCodeInitial);
  const [prevPageCode, setPrevPageCode] = useState([devVarPageCodeInitial]);
  const handlePrevPageCode = (prevCode) => {
    let newPrevPageCode = [...prevPageCode];
    newPrevPageCode.push(prevCode);
    setPrevPageCode(newPrevPageCode);
  };
  const backPage = () => {
    let newPrevPageCode = [...prevPageCode];
    newPrevPageCode.length = newPrevPageCode.length - 1;
    setPageCode(prevPageCode[prevPageCode.length - 1]);
    setPrevPageCode(newPrevPageCode);
  };
  return (
    <div
      sx={{
        variant: "div.flex",
        minHeight: "80vh",
      }}
    >
      <div>
        {data.books[0].pages.map((page, i) => {
          return (
            <Page
              page={page}
              pageCode={pageCode}
              setPageCode={setPageCode}
              prevPageCode={prevPageCode}
              setPrevPageCode={handlePrevPageCode}
              backPage={backPage}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Book;
