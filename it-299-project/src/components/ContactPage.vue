<template>
    
    <v-container class="fill-height main-con" max-width="900">
        <v-row>
            <v-col cols="12">
                <v-form>
                    <v-container class="form">
                        <v-row>
                            <v-col cols="12">
                                <v-text-field placeholder="Email" required></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field placeholder="First Name" required></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field placeholder="Last Name" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea placeholder="Message"></v-textarea>
                            </v-col>
                            <v-col cols="12">
                                <v-btn block size="x-large" class="bg-success">SUBMIT</v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

</script>

<style>

</style>