<template>
    <div class="common-box">
        <app-text-component></app-text-component>
        <v-tabs v-model="tab" align-tabs="left" color="#2f7d28">
            <v-tab :value="meals" max-width="400">Posiłki</v-tab>
            <v-tab :value="activity">Aktywności</v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item :value="meals"
                ><meals-journal></meals-journal
            ></v-window-item>
            <v-window-item :value="activity">
                <activity-journal></activity-journal
            ></v-window-item>
        </v-window>
    </div>
</template>

<script>
import AppNameText from "../textComponents/AppNameText.vue";
import ActivityJournalComponent from "../journal/ActivityJournalComponent.vue";
import MealsJournalComponent from "../journal/MealsJournalComponent.vue";

export default {
    components: {
        "app-text-component": AppNameText,
        "activity-journal": ActivityJournalComponent,
        "meals-journal": MealsJournalComponent,
    },
    data: () => ({
        tab: null,
    }),
    methods: {
        add() {
            const apiUrl = "http://localhost:3010";
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    date: "2024-05-02",
                    calories: "150",
                }),
            };

            fetch(`${apiUrl}/api/meals`, requestOptions)
                .then((response) => {
                    console.log(response);
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log("data", data);
                })
                .catch((error) => {
                    console.error("Error adding product:", error);
                });
        },
    },
};
</script>

<style>
@import "../styles/common-style.css";

.v-window {
    max-width: 700px;
}
</style>
./ActivityJournalComponent.vue./MealsJournalComponent.vue
