import React from "react";
import PageTitle from "../../components/PageTitle";
import { Tabs } from "antd";
 import MoviesList from "./MoviesList";
import TheatreTable from "./TheatreTable";

function Admin() {
  return (
    <div>
      <PageTitle title="Admin" />

      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Movies" key="1">
            <MoviesList/>
        </Tabs.TabPane>

        <Tabs.TabPane tab="Theatres" key="2">
            <TheatreTable/>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Admin;