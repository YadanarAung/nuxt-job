export default {    
    methods: {        
        toggleLoading (status, message) {
            this.$store.commit("blank/SET_IS_LOADING", status)
            this.$store.commit("blank/SET_LOADING_MESSAGE", message)
        },
        showSuccessDialog(message) {
            this.$notify({
                title: 'Success',
                message: message,
                type: 'success'
            });
        }
    }
}