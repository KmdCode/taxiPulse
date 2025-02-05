import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { Card, List, Badge } from '@ant-design/react-native';
import moment from 'moment';

const driver = {
  name: 'Karabo Modise',
  image: 'https://picsum.photos/id/64/200/300',
};

const notifications = [
  { id: '1', message: 'Next in line', date: moment().format('YYYY-MM-DD') },
  { id: '2', message: 'You are getting close on the queue.', date: moment().format('YYYY-MM-DD') },
  { id: '3', message: 'Delivery made.', date: moment().subtract(1, 'days').format('YYYY-MM-DD') },
  { id: '4', message: 'Next in line.', date: moment().subtract(1, 'days').format('YYYY-MM-DD') },
  { id: '5', message: 'Delivery made.', date: moment().subtract(2, 'days').format('YYYY-MM-DD') },
  { id: '6', message: 'Next in line.', date: moment().subtract(3, 'days').format('YYYY-MM-DD') },
  { id: '7', message: 'You are getting close on the queue.', date: moment().subtract(4, 'days').format('YYYY-MM-DD') },
];

const groupedNotifications = notifications.reduce((acc, notification) => {
  if (!acc[notification.date]) acc[notification.date] = [];
  acc[notification.date].push(notification);
  return acc;
}, {});

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.appName}>Taxi Pulse</Text>
        <View style={styles.driverInfo}>
          <Text style={styles.driverName}>{driver.name}</Text>
          <Image source={{ uri: driver.image }} style={styles.driverImage} />
        </View>
      </View>

      <Text style={styles.title}>Notifications</Text>

      {/* Notifications List */}
      <FlatList
        data={Object.keys(groupedNotifications)}
        keyExtractor={(date) => date}
        renderItem={({ item: date }) => (
          <View>
            <Text style={styles.sectionTitle}>
              {moment(date).calendar(null, {
                sameDay: '[Today]',
                lastDay: '[Yesterday]',
                lastWeek: 'dddd, MMM D',
                sameElse: 'MMM D, YYYY',
              })}
            </Text>
            <List>
              {groupedNotifications[date].map((notif) => (
                <Card key={notif.id} style={styles.card}>
                  <Card.Body>
                    <View style={styles.cardContent}>
                      <Badge dot style={styles.badge} />
                      <Text style={styles.notificationText}>{notif.message}</Text>
                    </View>
                  </Card.Body>
                </Card>
              ))}
            </List>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20},
  appName: { fontSize: 24, fontWeight: 'bold' },
  driverInfo: { flexDirection: 'row', alignItems: 'center' },
  driverName: { fontSize: 16, marginRight: 10 },
  driverImage: { width: 40, height: 40, borderRadius: 25 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 15, marginBottom: 5 },
  card: { marginBottom: 10 },
  cardContent: { flexDirection: 'row', alignItems: 'center' },
  badge: { marginRight: 10, marginLeft: 10 },
  notificationText: { fontSize: 16 },
});

export default NotificationScreen;
