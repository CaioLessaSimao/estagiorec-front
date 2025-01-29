<template>
     <form @submit.prevent="login" >
            <div>
                <label for="email" >E-mail</label>
                <input type="email" id="email" v-model="form.email">
            </div>
            <div>
                <label for="password" class="block text-sm font-medium text-gray-700">Senha</label>
                <input type="password" id="password" v-model="form.password">
            </div>
            <button type="submit" >Entrar</button>
        </form>
</template>

<script>
export default {
    
}
</script>