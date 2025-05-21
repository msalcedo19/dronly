<template>
  <div class="login-bg">
    <div class="login-container">
      <div class="login-logo-text">BIENVENIDO A DRONLY</div>
      <div class="login-title">Iniciar sesión</div>
      <div class="login-social">
        <el-button class="login-social-btn fb" round plain @click="goHome">
          <el-icon><i class="fab fa-facebook-f"></i></el-icon>
          Continuar con Facebook
        </el-button>
        <el-button class="login-social-btn google" round plain @click="goHome">
          <el-icon><i class="fab fa-google"></i></el-icon>
          Continuar con Google
        </el-button>
        <el-button class="login-social-btn apple" round plain @click="goHome">
          <el-icon><i class="fab fa-apple"></i></el-icon>
          Continuar con Apple
        </el-button>
      </div>
      <div class="login-divider"><span>o</span></div>
      <div class="login-form-section">
        <div class="login-label">Correo electrónico</div>
        <el-input v-model="email" placeholder="Correo electrónico o número de celular" class="login-input" />
        <el-button class="login-btn" @click="goHome">Iniciar sesión</el-button>
      </div>
      <div class="login-divider"><span>o</span></div>
      <div class="login-corp-link" @click="showCorp = !showCorp">Correo corporativo</div>
      <div v-if="showCorp" class="login-form-section">
        <el-input v-model="corpEmail" placeholder="Correo corporativo" class="login-input" />
        <el-button class="login-btn" @click="goHome">Iniciar sesión</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const corpEmail = ref('')
const showCorp = ref(false)

function goHome() {
  router.push({ name: 'home' })
}
</script>

<style scoped>
.login-bg {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fafc;
}
.login-container {
  background: #fff;
  border: 1px solid #b0b6c3;
  border-radius: 12px;
  padding: 32px 24px 24px 24px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 2px 8px 0 rgba(34,51,108,0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-logo-text {
  font-size: 2.2rem;
  font-weight: 800;
  color: #fff;
  background: #22336c;
  border-radius: 8px;
  padding: 18px 48px;
  margin-bottom: 24px;
  text-align: center;
  letter-spacing: 2px;
  box-shadow: 0 2px 8px 0 rgba(34,51,108,0.06);
}
.login-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #22336c;
  margin-bottom: 24px;
  text-align: center;
}
.login-social {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 18px;
}
.login-social-btn {
  width: 100%;
  font-weight: 600;
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
}
.login-social-btn.fb {
  color: #1877f3;
  border-color: #1877f3;
}
.login-social-btn.google {
  color: #ea4335;
  border-color: #ea4335;
}
.login-social-btn.apple {
  color: #222;
  border-color: #222;
}
.login-divider {
  width: 100%;
  text-align: center;
  color: #b0b6c3;
  margin: 18px 0 12px 0;
  position: relative;
}
.login-divider span {
  background: #fff;
  padding: 0 12px;
  position: relative;
  z-index: 1;
}
.login-divider:before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: #e0e7ef;
  z-index: 0;
}
.login-form-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 12px;
}
.login-label {
  font-weight: 600;
  color: #22336c;
  margin-bottom: 2px;
}
.login-input {
  width: 100%;
}
.login-btn {
  width: 70%;
  align-self: center;
  background: #e0e7ef;
  color: #22336c;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 6px;
  margin-top: 8px;
}
.login-corp-link {
  color: #2563eb;
  font-weight: 600;
  font-size: 1.05rem;
  text-decoration: underline;
  cursor: pointer;
  margin-bottom: 8px;
}
.login-social-btn {
  margin-left: 0 !important;
  margin-right: 10px;
}
</style> 