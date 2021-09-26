// ** @jsx jsx *
import React from "react";
import { jsx, Text, Button } from "theme-ui";
import insertVars from "../lib/insertVars";
const Page = ({
  page,
  pageCode,
  setPageCode,
  prevPageCode,
  setPrevPageCode,
  backPage,
}) => {
  return (
    page.code == pageCode && (
      <div
        sx={{
          variant: "div.flex",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          sx={{
            backgroundImage: `url(${page.background})`,
            border: "4px solid",
            borderColor: "primary",
            borderRadius: 1,
            width: 500,
            position: "relative",
          }}
        >
          {prevPageCode.length > 1 && (
            <div
              onClick={() => {
                backPage();
              }}
              sx={{
                variant: "buttons.default",
                position: "absolute",
                top: -13,
                left: -13,
                width: 26,
                height: 26,
                backgroundColor: "secondary",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
                borderRadius: 1,
              }}
            >
              {"<"}
            </div>
          )}
          <img src={page.img} width="250" />
          <div
            sx={{
              backgroundColor: "primary",
              borderRadius: "0 0 8px 8px",
              padding: 2,
            }}
          >
            <Text
              variant="default"
              sx={{
                variant: "text.default",
              }}
            >
              {insertVars(page.dialog)}
            </Text>
            <div sx={{ variant: "div.flex", display: "flex" }}>
              {page.options &&
                page.options.map((option, i) => {
                  return (
                    <div key={i}>
                      <Button
                        onClick={() => {
                          setPageCode(option.actionCode);
                          setPrevPageCode(page.code);
                        }}
                        variant="primary"
                        sx={{ variant: "buttons.primary" }}
                        mr={2}
                      >
                        {insertVars(option.text)}
                      </Button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Page;
