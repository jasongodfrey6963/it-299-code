<template>
    <label for="avatar">Choose a profile picture:</label>

<input type="file" id="avatar" @change="handleFileChange" name="avatar" ref="fileInput"accept="image/*" />
<v-btn type="submit" @click="uploadFile()">SUBMIT</v-btn>
<div>
    <v-img @change="this.$forceUpdate()" id="cropper" :src="'@/assets/'+ path" alt="" />
    
</div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            file: null,
            path: null
        }
    },
    methods: {
       
        handleFileChange(event) {
            this.file = event.target.files[0];
        },
        async uploadFile() {
            if(!this.file) {
                alert('Select a File!')
                return
            }
            const formData = new FormData();
            formData.append('file', this.file);

            try {
                const res = await axios.post('http://localhost:3001/upload', formData, {
                    header: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                this.path = res.data
                this.$emit('change')
                console.log(this.path);
            } catch(error) {
                console.error("Error uploading file:", error)
            }
        }
    }

}
</script>

<style>
#cropper{
    width: 100px;
    height: 100px;
}
</style>