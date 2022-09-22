import { createTheme, ThemeProvider } from "@mui/material";
import type { NextPage } from "next";
import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import React from "react";
import { Component } from "react";
import ProfilePage from "./profile-page";

const theme = createTheme({
  typography: {
    fontFamily: "monospace",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <ProfilePage />
    </ThemeProvider>
  );
}

export default Home;
