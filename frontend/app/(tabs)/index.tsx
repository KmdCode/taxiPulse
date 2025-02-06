import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { Card } from '@ant-design/react-native';

const driver = {
  name: 'Karabo Modise',
  image: 'https://picsum.photos/id/64/200/300',
  taxiNumber: 'DEF-456-GP',
  queuePosition: 1,
};

const queueList = [
  driver,
  { id: '1', name: 'Ederson', image: 'https://picsum.photos/id/239/200/300', taxiNumber: 'ABC-123-GP' },
  { id: '2', name: 'John Stones', image: 'https://picsum.photos/id/239/200/300', taxiNumber: 'XYZ-789-GP' },
  { id: '3', name: 'Jack Grealish', image:'https://picsum.photos/id/236/200/300', taxiNumber: 'LMN-456-GP' },
  { id: '4', name: 'Ruben Dias', image:'https://picsum.photos/id/220/200/300', taxiNumber: 'HBB-367-GP' },
  { id: '5', name: 'Manuel Akanji', image:'https://picsum.photos/id/221/200/300', taxiNumber: 'GHY-778-GP' },
  { id: '6', name: 'Rico Lewis', image: 'https://picsum.photos/id/222/200/300', taxiNumber: 'MNY-267-GP' },
  { id: '7', name: 'Rodri Hernandez', image: 'https://picsum.photos/id/223/200/300', taxiNumber: 'MBX-312-GP' },
  { id: '8', name: 'Bernardo Silva', image: 'https://picsum.photos/id/235/200/300', taxiNumber: 'WYP-677-GP' },
  { id: '9', name: 'Oscar Bobb', image: 'https://picsum.photos/id/225/200/300', taxiNumber: 'THS-339-GP' },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.appName}>Taxi Pulse</Text>
        <View style={styles.driverInfo}>
          <Text style={styles.driverNameNav}>{driver.name}</Text>
          <Image source={{ uri: driver.image }} style={styles.driverImage} />
        </View>
      </View>

      {/* Driver Queue Position */}
      <View style={styles.routeContainer}>
        <Text style={styles.routeText}> Garankuwa To Town, via Marabastad</Text>
      </View>



      <View style={styles.burnerContainer}>
        <Image source={{ uri: 'https://picsum.photos/400/150' }} style={styles.burnerImage} />
        <Text style={styles.burnerText}>Welcome to Taxi Pulse! Stay updated with live queue positions.</Text>
      </View>

      {/*<Text style={styles.queuePosition}>You are currently number {driver.queuePosition} in line</Text> */}
      <Text style={styles.taxiRoute}>Next Driver</Text>
      {/* Queue List */}
      <FlatList
        data={queueList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Card style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.queueNumber}>{index + 1}.</Text>
              <Image source={{ uri: item.image }} style={styles.driverImage} />
              <View>
                <Text style={styles.driverName}>{item.name}</Text>
                <Text style={styles.taxiNumber}>Taxi: {item.taxiNumber}</Text>
              </View>
            </View>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  taxiRoute:{fontSize: 22, fontWeight: 'bold', marginBottom: 10},
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  appName: { fontSize: 24, fontWeight: 'bold' },
  driverInfo: { flexDirection: 'row', alignItems: 'center' },
  driverName: { fontSize: 16, marginRight: 10, marginLeft: 10 },
  driverNameNav: { fontSize: 16, marginRight: 10 },
  driverImage: { width: 40, height: 40, borderRadius: 25},
  queuePosition: { fontSize: 18, marginBottom: 10 },
  card: { marginBottom: 10, padding: 10 },
  cardContent: { flexDirection: 'row', alignItems: 'center' },
  queueNumber: { fontSize: 16, fontWeight: 'bold', marginRight: 15 },
  taxiNumber: { fontSize: 14, color: 'gray', marginLeft: 10 },

  burnerContainer: { marginBottom: 15, alignItems: 'center' },
  burnerImage: { width: '100%', height: 150, borderRadius: 15 },
  burnerText: { marginTop: 10, fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: 'gray' },

  routeContainer: {
    backgroundColor: '#F8F9FA', // Soft neutral background
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
  },
  
  routeLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333', // Darker for emphasis
  },
  
  routeText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#555',
    flexShrink: 1, // Ensures text wraps neatly
    marginLeft: 5,
  },
  
  
});

export default HomeScreen;
