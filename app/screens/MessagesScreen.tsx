import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
  Screen,
} from "../components";

const initialMessages = [
  {
    id: 1,
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia odit, cupiditate veniam pariatur repellat nemo dolores optio, explicabo ipsam exercitationem molestias architecto aut quaerat in. Temporibus corporis quibusdam facere doloremque quasi fuga velit enim a dolorum, blanditiis amet incidunt et labore quidem voluptatem quos quas? Eligendi provident, placeat quae consequatur quasi accusantium debitis, cum nobis alias sed libero sequi error ipsam distinctio. Cum mollitia libero beatae ipsam aliquid exercitationem, tempora dolores. Labore consequatur laborum illum velit officiis. Non error accusantium debitis nulla, cum autem. Sunt inventore dignissimos eveniet itaque voluptatem. Delectus numquam facilis, veniam a sequi quae dolorum quo fuga? Error alias enim omnis blanditiis quis accusamus totam architecto pariatur adipisci veniam, inventore vitae quas excepturi eveniet ab dolorem, vero voluptas magni incidunt commodi nam unde reprehenderit officiis? Blanditiis cumque soluta doloremque temporibus, enim distinctio. Possimus at ullam, quo aspernatur, molestias cumque consectetur voluptas ex nihil architecto cupiditate aliquid neque nobis nesciunt labore omnis quos laboriosam mollitia ipsum magnam sunt quae autem? Consectetur quos quaerat sapiente. Quam voluptas, est molestias nostrum, similique accusantium maiores nulla veritatis porro nemo natus. Dolores aut porro maxime dignissimos suscipit consequuntur optio voluptas distinctio sunt illum est fugiat totam dolore amet quia dolor quidem cumque libero, minus commodi architecto blanditiis temporibus! Nostrum, obcaecati maxime sed, cum tempore voluptate nisi consequatur saepe, praesentium dicta harum nam? Omnis, ipsa pariatur. Natus enim ullam voluptas fugiat quo tenetur doloremque eum blanditiis, quas autem voluptatum minus vero. Mollitia sit soluta minus eius, adipisci obcaecati provident assumenda fuga laudantium earum, voluptatibus aut ut quidem quas quod totam, temporibus porro libero! Quidem, aliquid molestias praesentium nemo tenetur quia quos labore vitae dolorem corrupti sed laboriosam omnis. Architecto quibusdam, harum similique nobis voluptas est reiciendis id ut ducimus commodi minus expedita quam ipsum, odit quae tempora obcaecati possimus laborum et, iure sunt.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, qui ducimus maiores illo nostrum dolorum? Porro quo exercitationem tempora delectus dolores corrupti qui explicabo inventore neque saepe. Veniam, saepe. Unde, quas labore excepturi nam laudantium impedit delectus dolorem saepe ipsum culpa non aperiam, suscipit velit consequatur alias blanditiis corporis obcaecati minus, a beatae nemo. Iure culpa id nulla magni voluptates. Sed incidunt consequuntur saepe reiciendis sit veritatis iste earum accusamus consequatur vel! Neque cum veniam eveniet, facilis quis delectus atque eaque reiciendis natus debitis quas nostrum, libero enim, hic laboriosam itaque odio nihil. Autem, minima. Officiis veritatis molestiae doloremque. Nisi.",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDeleteMessage = (item) => {
    setMessages(messages.filter((msg) => msg.id !== item.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        ItemSeparatorComponent={ListItemSeparator}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subtitle={item.description}
            onPress={() => console.log("Message selected:", item)}
            // onPress={() => null}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDeleteMessage(item)} />
            )}
          />
        )}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            // ...messages,
            {
              id: Math.floor(Math.random() * 100),
              title: "T3",
              description: "D3",
              image: require("../assets/mosh.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
