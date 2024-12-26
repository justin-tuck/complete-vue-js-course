const { createApp, reactive, computed } = Vue;

const DEFAULT_STATE = {
    state:true,
    inputName:'',
    names:[],
    error:'',
    showError: false,
    result: ''

};

createApp({
    setup(){
        const data = reactive(DEFAULT_STATE);

        const isReady = computed(()=>{
            return data.names.length > 1
        })

        const addNameToList = () => {
            const userName = data.inputName;
           

            if(validateName(userName)){
                data.names.push(userName);
                data.inputName = '';
            }  
            
        }

        const validateName = (name) => {
           
            if(name === '') {
                data.error = 'Please enter a name.';
                data.showError = true;
                return false;
            }

            if(data.names.includes(name)) {
                data.error = 'Please enter a name not in the list.';
                data.showError = true;
                return false;
            }

            data.error = '';
            data.showError = false;
            return true; 
        }

        const removeName = (index) => {
            data.names.splice(index, 1); 
        }

        const showResults = () => {
            generateResult()
            data.state = false;
        }

        const generateResult = () => {
            let rand = getRandomName();

            if(data.result !== '') {
               while(rand ===  data.result) {
                    rand = getRandomName()
               }
            }

            data.result = rand; 
        }

        const getRandomName = () => {
            return data.names[Math.floor(Math.random() * data.names.length)]
        }

        const resetApp = () => {
             
            data.state = true;
            data.inputName = '';
            data.names = [];
            data.error = '';
            data.showError =  false;
            data.result =  '';
            
        }

        const getNewResult = () => {
            generateResult();
        }
        
        return {
            data,
            addNameToList,
            removeName,
            isReady,
            showResults,
            resetApp,
            getNewResult
        }
    }
}).mount('#app')