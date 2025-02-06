import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from '@ant-design/react-native';

const driver = {
  name: 'Karabo Modise',
  image: 'https://picsum.photos/id/64/200/300',
  taxiNumber: 'DEF-456-GP',
  phone: '+27 123 456 7890',
  email: 'karabo@example.com',
  licenseNumber: '12345-67890',
  taxiModel: 'Toyota Quantum',
  taxiRoute: 'Garankuwa To Town',
};

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.appName}>Taxi Pulse</Text>
        <View style={styles.driverInfo}>
          <Text style={styles.driverName}>{driver.name}</Text>
          <Image source={{ uri: driver.image }} style={styles.driverImage} />
        </View>
      </View>

      <View style={styles.burnerContainer}>
        <Image source={{ uri: driver.image }} style={styles.burnerImage} />
      </View>

      {/* Driver Information */}
      <Card style={styles.card}>
        <Card.Body>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{driver.name}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.value}>{driver.phone}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{driver.email}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Taxi Number:</Text>
            <Text style={styles.value}>{driver.taxiNumber}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>License Number:</Text>
            <Text style={styles.value}>{driver.licenseNumber}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Taxi Model:</Text>
            <Text style={styles.value}>{driver.taxiModel}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Route:</Text>
            <Text style={styles.value}>{driver.taxiRoute}</Text>
          </View>
        </Card.Body>
      </Card>

      {/* Update Button */}
      <Button type="primary" style={styles.updateButton}>
        Update Profile
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, marginTop:10 },
  appName: { fontSize: 24, fontWeight: 'bold' },
  driverInfo: { flexDirection: 'row', alignItems: 'center' },
  driverName: { fontSize: 16, marginRight: 10 },
  driverImage: { width: 40, height: 40, borderRadius: 25 },
  card: { padding: 10, backgroundColor: 'white', borderRadius: 10, elevation: 3 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 0.5, borderBottomColor: '#ddd' },
  label: { fontSize: 16, fontWeight: 'bold' },
  value: { fontSize: 16, color: 'gray' },
  updateButton: { marginTop: 20 },

  burnerContainer: { marginBottom: 15, alignItems: 'center' },
  burnerImage: { width: '100%', height: 150, borderRadius: 15 },
  burnerText: { marginTop: 10, fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: 'gray' },
});

export default ProfileScreen;
