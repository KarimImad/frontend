import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { AppColors } from '@/constants/theme';

//Déclaration de l'interface des props, pour typer les arguments du composant
interface LoadingSpinnerProps {
    size?: "small" | "large";
    color?: string;
    text?: string;
    fullscreen?: boolean;
}
//Définition du composant fonctionnel
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    size = "small",
    color = AppColors.primary[500],
    text="Loading...",
    fullscreen=false,
}) => {
    // Si "fullscreen" est true on retourne un spinner dans une View stylée
if (fullscreen) {
    return (
    <View style={styles.fullscreen}>
        <ActivityIndicator size={size} color={color}/>
        {text && <Text style={styles.text}>{text}</Text>}
    </View>
    );
}
//Sinon, on retourne le spinner dans une view "container"
    return (
     <View style={styles.container}>
        <ActivityIndicator size={size} color={color}/>
        {text && <Text style={styles.text}>{text}</Text>}
    </View>
    );
 
}

export default LoadingSpinner

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullscreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.background.primary,
  },
  text: {
    marginTop: 8,
    fontSize: 24,
    color: AppColors.text.primary,
  }

})

