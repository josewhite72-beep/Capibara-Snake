# 🐹 Capibara Snake - Juego Educativo Anti-Bullying

![Captura del Juego](https://img.shields.io/badge/Estado-🚀%20Activo-brightgreen)
![Versión](https://img.shields.io/badge/Versión-2.1.0-blue)
![Licencia](https://img.shields.io/badge/Licencia-MIT-yellow)
![PWA](https://img.shields.io/badge/PWA-✅%20Compatible-success)

Un juego educativo tipo "snake" con temática anti-bullying donde controlas a una capibara que debe recolectar canicas mientras evita bullies en diferentes ambientes escolares.

## 🎮 Demo en Vivo

🔗 **[Jugar Ahora]** (agregar tu URL de GitHub Pages o hosting aquí)

## 📱 Características Principales

### 🎯 Jugabilidad
- **21 niveles progresivos** con dificultad creciente
- **Mecánica de snake clásica** con controles modernos
- **Sistema de colección** de canicas (6+ para avanzar)
- **Múltiples tipos de bullies** con comportamientos únicos
- **Obstáculos y entornos** escolares variados

### 🎨 Experiencia Visual
- **Interfaz responsive** que funciona en móvil y desktop
- **Sprites personalizados** de capibaras y bullies
- **Efectos visuales** atractivos y feedback claro
- **Tema educativo** con mensajes anti-bullying

### 🔊 Audio Inmersivo
- **Banda sonora** original y motivadora
- **Efectos de sonido** para cada acción
- **Controles de volumen** integrados
- **Ajustes de velocidad** personalizables

### ⚡ Tecnología
- **PWA completa** (Progressive Web App)
- **Funciona offline** sin conexión a internet
- **Instalable** en dispositivos móviles y desktop
- **Carga instantánea** con service worker

## 🕹️ Cómo Jugar

### Objetivo
Recolecta **6 o más canicas** de las 10 disponibles en cada nivel para avanzar, evitando chocar con los bullies y obstáculos.

### Controles
- **Botones en pantalla**: ⬆️ ⬇️ ⬅️ ➡️
- **Teclado**: Flechas direccionales
- **Táctil**: Controles touch en dispositivos móviles

### Mecánicas
- **Canicas**: +10 puntos cada una
- **Bullies**: -2 canicas al chocar
- **Obstáculos**: -1 canica al chocar
- **Tiempo**: 3 minutos por nivel
- **Bonus**: +5 segundos al recolectar 4+ canicas

### Niveles
1. **Aula Tranquila** (Introducción)
2. **Biblioteca** (Más bullies)
3. **Patio** (Velocidad media)
4. **Pasillos** (Obstáculos complejos)
5. **Cafetería** (Dificultad media)
... hasta el nivel 21 de **VICTORIA**

## 🛠️ Instalación y Desarrollo

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local para desarrollo (opcional)

### Instalación Local
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/capibara-snake.git

# Entrar al directorio
cd capibara-snake

# Servir con un servidor local (Python)
python -m http.server 8000

# O con Node.js
npx http-server

# O simplemente abrir index.html en el navegador