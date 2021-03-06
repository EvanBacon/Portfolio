import React from 'react';

import { View, StyleSheet } from 'react-native';
import { A } from '@expo/html-elements';
import ProjectCard from '../components/card/Card';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { Podcasts } from '../Data';

export default function({ navigation }) {
  return (
    <Layout navigation={navigation}>
      <PageHeader>Podcasts</PageHeader>
      {Podcasts.map(({ authors, ...project }) => (
        <ProjectCard
          key={project.title}
          {...project}
          renderDescription={() => (
            <View style={styles.aWrapper}>
              {authors.map((author, index) => (
                <A
                  key={author}
                  href={`https://twitter.com/${author}`}
                  style={styles.a}
                >
                  {`@${author}${index !== authors.length - 1 ? ' | ' : ''}`}
                </A>
              ))}
            </View>
          )}
        />
      ))}
    </Layout>
  );
}

const styles = StyleSheet.create({
  aWrapper: { flexDirection: 'row' },
  a: {
    marginVertical: 0,
    color: 'white',
    marginBottom: 4,
  },
});
