import * as Contacts from 'expo-contacts'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ContactList() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const getContacts = async () => {
      // Request permission to access contacts
      const { status } = await Contacts.requestPermissionsAsync()
      if (status === 'granted') {
        // Fetch contacts
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers]
        })

        if (data.length > 0) {
          setContacts(data)
        }
      }
    }
    getContacts()
  }, [])

  const handleContactPress = (contact) => {
    //TODO  Implement your logic for social sharing or communication here
    // For example, you can navigate to a chat screen with the selected contact
    // navigation.navigate('ChatScreen', { contact })
  }

  const renderContactItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleContactPress(item)}>
      <View style={styles.contact}>
        <Text>{item.name}</Text>
        {item.phoneNumbers && item.phoneNumbers.length > 0 && (
          <Text>{item.phoneNumbers[0].number}</Text>
        )}
      </View>
    </TouchableOpacity>
  )

  return (
    <View>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderContactItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  contact: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
})
