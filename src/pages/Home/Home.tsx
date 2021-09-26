import React from "react";
import Form from "../../components/Form/Form";
import { List, Card, Row } from "antd";
import styled from "styled-components";

const { Item } = List;

const data = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
  {
    title: "Title 5",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },

  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
];

const ListView = styled.div`
  background: grey;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;

const ImageCard = styled(Card)`
  width: 100%;
`;

const CardList = styled(List)`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Home = () => {
  return (
    <ListView data-testid="home-page">
      <CardList
        grid={{ gutter: 0, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
        dataSource={data}
        itemLayout="vertical"
        size="small"
        renderItem={(card) => (
          <ImageCard title={"Uploaded by: Test"}>
            {
              <Image src="data:image/png;base64,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" />
            }
          </ImageCard>
        )}
      ></CardList>
    </ListView>
  );
};

export default Home;
