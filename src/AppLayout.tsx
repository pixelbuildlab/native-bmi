import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, View } from 'react-native'
type AppLayoutProps = {
  header: React.ReactNode
  main: React.ReactNode
  action: React.ReactNode
}
const AppLayout = ({ header, main, action }: AppLayoutProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <LinearGradient
          colors={['#5c00d2', '#cd00ea']}
          start={[0, 0]}
          end={[0, 1]}
          style={styles.header}
        >
          {header}
        </LinearGradient>
        <View style={styles.main}>{main}</View>
        <View style={styles.action}>{action}</View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 4,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    padding: 22,
    borderBottomRightRadius: 26,
    borderBottomLeftRadius: 26,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignSelf: 'stretch',
    flex: 1,
  },
  main: {
    flex: 4,
    marginTop: 16,
    paddingHorizontal: 15,
  },
  action: {
    flex: 2,
    justifyContent: 'flex-end',
    marginBottom: 20,
    marginHorizontal: 15,
  },
})

export default AppLayout
