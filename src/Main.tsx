// import React from 'react'
// import { StatusBar } from 'expo-status-bar'
// import { StyleSheet, Text, TextInput, View } from 'react-native'
// import { useTranslation } from './hooks/common'
// import { SCREEN_LIST } from './constants'
// import { LinearGradient } from 'expo-linear-gradient'
// import { PressableButton } from './sharedComponents'

import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import Onboarding from './components/Onboarding'

export default function Main() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style='auto' />
      <Onboarding />
    </View>
  )
}
// export default function Main() {
//   const translatedText = useTranslation(SCREEN_LIST.ONBOARDING)
//   return (
//     <View style={styles.container}>
//       <StatusBar style='auto' />
//       <View style={styles.content}>
//         <LinearGradient
//           colors={['#5c00d2', '#cd00ea']}
//           start={[0, 0]}
//           end={[0, 1]}
//           style={styles.header}
//         >
//           <View>
//             <Text style={styles.heading}>{translatedText.heading}</Text>
//             <Text style={styles.subHeading}>{translatedText.subHeading}</Text>
//           </View>
//         </LinearGradient>
//         <View style={styles.main}>
//           <TextInput
//             placeholder={translatedText.placeholderHeight}
//             style={styles.field}
//           />
//           <TextInput
//             placeholder={translatedText.placeholderWeight}
//             style={styles.field}
//           />
//         </View>
//         <View style={styles.action}>
//           <PressableButton title={translatedText.actionButton} />
//         </View>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   content: {
//     alignSelf: 'stretch',
//     flex: 1,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: 'white',
//     marginBottom: 20,
//   },
//   subHeading: {
//     fontSize: 16,
//     color: 'white',
//   },

//   header: {
//     flex: 3,
//     alignSelf: 'stretch',
//     justifyContent: 'flex-end',
//     padding: 22,
//     borderBottomRightRadius: 26,
//     borderBottomLeftRadius: 26,
//   },
//   main: {
//     flex: 4,
//     marginTop: 16,
//     paddingHorizontal: 15,
//     gap: 20,
//   },
//   field: {
//     backgroundColor: '#eee',
//     padding: 16,
//     borderRadius: 8,
//   },
//   action: {
//     flex: 2,
//     justifyContent: 'flex-end',
//     marginBottom: 20,
//     marginHorizontal: 15,
//   },
// })
