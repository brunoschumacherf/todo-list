import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Task } from './src/components/Task';
import { Form } from './src/components/Form';

type TaskType = {
    id: number;
    text: string;
};

function App() {
    const [tasks, setTasks] = useState<TaskType[]>([]);

    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = (newTask: string) => {
        const newTaskObject: TaskType = {
            id: Date.now(),
            text: newTask,
        };
        setTasks([...tasks, newTaskObject]);
    };

    const handleDeleteTask = (taskId: number) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const updateTask = (taskId: number, newText: string) => {
        setTasks(tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, text: newText };
            }
            return task;
        }));
    };

    return (
        <View style={styles.container}>
            <View style={styles.AppContainer}>
                <Text style={styles.title}>As tarefas de hoje são:</Text>
            </View>
            <Form onAddTask={handleAddTask} />
            {tasks.map((task) => (
                <Task key={task.id} task={task.text} onDelete={() => handleDeleteTask(task.id)} onUpdate={(newText) => updateTask(task.id, newText)} />
            ))}
        </View>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 80,
        textAlign: 'center',
        color: 'white',
    },
    AppContainer: {
        padding: 20,
        paddingTop: 50,
    },
});
