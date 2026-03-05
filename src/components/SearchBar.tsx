import React from "react";
import { View, TextInput, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../styles/ComponentStyles";

interface Props {
  search: string;
  setSearch: (text: string) => void;
  darkMode?: boolean;
}

export default function SearchBar({ search, setSearch, darkMode = false }: Props) {
  return (
    <View style={[styles.searchContainer, darkMode && styles.searchContainerDark]}>
      <Ionicons
        name="search"
        size={18}
        color={darkMode ? "#8fa3bf" : "#50627a"}
        style={styles.searchIcon}
      />
      <TextInput
        placeholder="Search for jobs..."
        placeholderTextColor={darkMode ? "#90a0b5" : "#6d7a8f"}
        style={[styles.searchInput, darkMode && styles.searchInputDark]}
        value={search}
        onChangeText={setSearch}
      />
      {search.length > 0 ? (
        <Pressable onPress={() => setSearch("")} hitSlop={8}>
          <Ionicons
            name="close-circle"
            size={18}
            color={darkMode ? "#8fa3bf" : "#50627a"}
          />
        </Pressable>
      ) : null}
    </View>
  );
}

