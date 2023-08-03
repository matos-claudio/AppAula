import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type IFollowers = {
  login: string;
  avatar_url: string;
  url: string;
  id: string;
};

const Details = () => {
  const {params} = useRoute();
  const {owner} = params;
  const [followers, setFollowers] = useState<IFollowers[]>([]);

  console.log(`params: ${JSON.stringify(owner)}`);
  useEffect(() => {
    fetch(owner.followers_url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer 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',
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log(`Followers: ${JSON.stringify(json)}`);
        setFollowers(json);
      });
  }, [owner.followers_url]);

  const onPress = () => {
    // navigate('Details', {owner});
  };

  return (
    <View>
      <SafeAreaView />
      <FlatList
        data={followers}
        renderItem={({item, index}) => (
          <TouchableOpacity onPress={() => onPress()}>
            <View
              key={index}
              style={{
                backgroundColor: '#FFF',
                marginTop: 8,
                padding: 8,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: item.avatar_url}}
                style={{width: 40, height: 40, borderRadius: 20}}
              />
              <Text style={{marginLeft: 8}}>{item.login}</Text>
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
    </View>
  );
};

export default Details;
