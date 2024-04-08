import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TimeClockComponent = () => {
    const [timeRemaining, setTimeRemaining] = useState(540); // 60 seconds

    useEffect(() => {
        let interval = null;

        const startTimer = () => {
            interval = setInterval(() => {
                setTimeRemaining((prevTime) => prevTime - 1);
            }, 1000);
        };

        const stopTimer = () => {
            clearInterval(interval);
        };

        startTimer();

        return () => {
            stopTimer();
        };
    }, []);

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    return (
        <View style={styles.container}>
            <Text style={styles.timeText}>
                {minutes.toString().padStart(2, '0')}.{seconds.toString().padStart(2, '0')}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 16,
    },
    timeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#777',
    },
});

export default TimeClockComponent;