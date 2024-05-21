import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

type TaskProps = {
    task: string;
    onDelete: () => void;
    onUpdate: (newText: string) => void;
};

export function Task({ task, onDelete, onUpdate }: TaskProps) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.task} value={task} onChangeText={onUpdate} />
            <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
                <Text style={styles.deleteButtonText}>Excluir</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    task: {
        flex: 1,
        fontSize: 18,
    },
    deleteButton: {
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: '#fff',
    },
});
