import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "../components/styleComponents/Grid";
import Flex from "../components/styleComponents/Flex";
import Img from "../components/styleComponents/Img";
import MarginBottom from "../components/styleComponents/Margin";
import Item from "../components/styleComponents/Item";

function Home() {
    const [data, setData] = useState([]);

    // Функция для получения данных
    const getData = (type) =>
        axios
            .get(`https://jsonplaceholder.typicode.com/${type}`)
            .then(({ data }) => data);
    // Получения данных при первом рендере
    useEffect(() => {
        Promise.all(["posts", "users", "photos"].map(getData)).then(
            ([posts, users, photos]) => {
                const usersObj = Object.fromEntries(
                    users.map((n) => [n.id, n])
                );
                setData(
                    posts.map((n) => ({
                        post: n,
                        user: usersObj[n.userId],
                        photos: photos[n.id],
                    }))
                );
            }
        );
    }, []);

    return (
        <section>
            <Grid>
                {data
                    ? data.map(({ post, user, photos }) => {
                          return (
                              <Item key={post.id}>
                                  <MarginBottom marginBottom={"25"}>
                                      <Flex display={"flex"} margin={"20"}>
                                          <Img
                                              src={photos.thumbnailUrl}
                                              alt=""
                                          />
                                          <div>
                                              <MarginBottom marginBottom={"11"}>
                                                  Autor: {user.name}
                                              </MarginBottom>
                                              <div>
                                                  Company:
                                                  {user.company.name}
                                              </div>
                                          </div>
                                      </Flex>
                                  </MarginBottom>
                                  <MarginBottom marginBottom={"20"}>
                                      Title: {post.title}
                                  </MarginBottom>
                                  <div>{post.body}</div>
                              </Item>
                          );
                      })
                    : ""}
            </Grid>
        </section>
    );
}

export default Home;
