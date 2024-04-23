<template>
    <div class="common-box">
        <div class="app-name">
                <app-name></app-name> 
        </div>
        <div
            :style="{
                fontSize: '24px',
                color: '#2f7d28',
                alignSelf: 'flex-start',
                fontWeight: 300
            }"
        >
            Kalkulator kalorii
        </div>
        <div
            :style="{
                fontSize: '24px',
                color: '#black',
                alignSelf: 'flex-start',
                fontWeight: 200
            }"
        >
            Uzupełnij dane, a my obliczymy Twoje zapotrzebowanie kaloryczne:
        </div>
        <div class="sex-select">
            <select-component
                name="sex"
                placeholder="płeć"
                :options="this.sexOptions"
            ></select-component>
        </div>
        <div class="input-box">
            <input-field 
                name="age" 
                label="wiek"
            ></input-field>
            <input-field
                name="weight"
                label="waga (kg)"
                type="number"
            ></input-field>
            <input-field
                name="height"
                label="wzrost (cm)"
                type="number"
            ></input-field>
        </div>
        <div class="select-box">
            <select-component
                name="work_activity_level"
                placeholder="poziom aktywności w pracy"
                minWidth="300px"
                :options="this.workActivityLevelOptions"
            ></select-component>
            <select-component
                name="freetime_activity_level"
                placeholder="poziom aktywności w wolnym czasie"
                minWidth="300px"
                :options="this.freeTimeActivityLevelOptions"
            ></select-component>
            <select-component
                name="diet_goal"
                placeholder="cel diety"
                minWidth="300px"
                :options="this.dietGoalOptions"
            ></select-component>
        </div>
        <div>
            <submit-button
                name="Oblicz"
                minWidthBtn="104px"
                minHeightBtn="43px"
                @click="calculate"
            ></submit-button>
        </div>
        <div
            :style="{
                alignItems: 'center',
                marginTop: '1rem',
                fontWeight: 300,
                fontSize: '24px',
            }"
        >
            Twoje zapotrzebowanie kaloryczne:
        </div>

        <div
            :style="{
                alignItems: 'center',
                fontWeight: 300,
                fontSize: '32px',
            }"
        >
        {{ caloricDemand }}
        </div>
    </div>
</template>
<script>
import AppNameText from "../textComponents/AppNameText.vue";
import SelectComponent from "../inputComponents/SelectComponent.vue";
import InputField from "../inputComponents/InputField.vue";
import SubmitButton from "../buttons/SubmitButton.vue";

export default {
    components: {
        "app-name": AppNameText,
        "select-component": SelectComponent,
        "input-field": InputField,
        "submit-button": SubmitButton,
    },
    
    methods: {
        calculate (){
            this.caloricDemand ++;
            //pobrac dane z inputów i podstawić pod wzór
        }
    },
    
    data() {
        return {
            caloricDemand: 0,
            sexOptions: [
                { label: "mężczyzna", value: "male" },
                { label: "kobieta", value: "female" },
            ],
            workActivityLevelOptions: [
                { label: "bardzo lekka - np. praca przed komputerem, kierowca", value: "sedentary" },
                { label: "lekka - np. lekka praca przemysłowa, sprzedaż", value: "lowActive" },
                { label: "umiarkowana - np. sprzątanie, praca w kuchni", value: "active" },
                { label: "ciężka - np. przemysł, prace budowlane lub rolnictwo", value: "veryActive" },
            ],
            freeTimeActivityLevelOptions: [
                { label: "bardzo lekka - brak aktywności w wolnym czasie", value: "sedentary" },
                { label: "lekka - np. raz w tygodniu spaceruje, pracuję w ogródku", value: "lowActive" },
                { label: "umiarkowana - reguralnie ćwiczę min. raz w tygodniu ", value: "active" },
                { label: "duża - reguralnie ćwiczę więcej niż raz w tygodniu", value: "veryActive" },
                { label: "intensywna - ciężka aktywności fizyczna kilka razy w tygodniu", value: "extremelyActive" },
            ],
            dietGoalOptions: [
                { label: "chcę schudnąć", value: "deficit" },
                { label: "chcę utrzymać wagę", value: "maintenance" },
                { label: "chcę przytyć", value: "surplus" },
            ],
        };
    },
};
</script>

<style>
@import "../styles/common-style.css";

.sex-select {
    align-items: center;
    justify-content: center;
}
.input-box {
    display: flex; /* Use flexbox to arrange the input fields */
    justify-content: space-between; /* Distribute space between input fields */
    margin-top: 20px; /* Add some top margin for spacing */
}

.input-field {
    flex: 1; /* Allow input fields to grow and shrink as needed */
    margin-right: 10px; /* Add right margin to create space between input fields */
}

.input-field:last-child {
    margin-right: 0; /* Remove right margin from the last input field */
}
.select-box {
    display: flex;
    flex-direction: column;
}
</style>
