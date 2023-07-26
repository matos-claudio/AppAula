import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface IUser {
  avatar_url: string;
  name: string;
  bio: string;
}

interface IOwner {
  avatar_url: string;
  url: string;
  followers_url: string;
}

interface IData {
  id: string;
  name: string;
  owner: IOwner;
  url: string;
  language: string;
}

const Home = () => {
  const [user, setUser] = useState<IUser>();
  const [listRpos, setListRepos] = useState<IData[]>([]);
  //   const [isLoading, setIsLoading] = useState<Boolean>(true);

  const URL = 'https://api.github.com';
  useEffect(() => {
    // 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
    fetch(`${URL}/user`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer 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',
      },
    })
      .then(response => response.json())
      .then(json => {
        // console.log(`RESPOSTA: ${JSON.stringify(json)}`);
        setUser(json);
      })
      .catch(e => {
        console.log(`Erro: ${e}`);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  });

  useEffect(() => {
    fetch(`${URL}/users/matos-claudio/repos`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer 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',
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log(`REPOSITORIOS: ${JSON.stringify(json)}`);
        setListRepos(json);
      });
  }, []);

  return (
    <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight || 0}}>
      <View style={styles.imageView}>
        <Image source={{uri: user?.avatar_url}} style={styles.image} />
        <Text style={{fontSize: 24}}>{user?.name}</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{user?.bio}</Text>
      </View>
      <View style={{padding: 8}}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Repositórios</Text>
      </View>
      <FlatList
        data={listRpos}
        renderItem={({item, index}) => (
          <TouchableOpacity>
            <View
              key={index}
              style={{backgroundColor: '#FFF', marginTop: 8, padding: 8}}>
              <Text>{item.name}</Text>
              <Text>{item.language || 'Linguagem não encontrada'}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        // ListHeaderComponent={
        //   <View style={{padding: 8}}>
        //     <Text style={{fontWeight: 'bold', fontSize: 16}}>Repositórios</Text>
        //   </View>
        // }
        ListEmptyComponent={<ActivityIndicator size={'large'} color={'red'} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageView: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 8,
  },
  image: {
    width: 120,
    height: 120,
    borderWidth: 3,
    borderColor: 'grey',
    borderRadius: 60,
    alignSelf: 'center',
  },
});

export default Home;
