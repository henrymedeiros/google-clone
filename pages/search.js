import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import DummyData from "../DummyData";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";
import PaginationButtons from "../components/PaginationButtons";

function Search({ results }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>
      {/* Header */}
      <Header></Header>
      {/* Search Results */}
      <SearchResults results={results}></SearchResults>
      <PaginationButtons></PaginationButtons>
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;

  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? DummyData
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: { results: data },
  };
}
