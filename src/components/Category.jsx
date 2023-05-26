import React from "react";
import Coming from "./Categories/Coming";
import Horror from "./Categories/Horror";
import Popular from "./Categories/Popular";
import Top from "./Categories/Top";
import Trending from "./Categories/Trending";

const Category = ({ request, setSelected, selected }) => {
  return (
    <>
      <Popular
        request={request}
        selected={selected}
        setSelected={setSelected}
      />
      <Top request={request} selected={selected} setSelected={setSelected} />
      <Trending
        request={request}
        selected={selected}
        setSelected={setSelected}
      />
      <Horror request={request} selected={selected} setSelected={setSelected} />
      <Coming request={request} selected={selected} setSelected={setSelected} />
    </>
  );
};

export default Category;
