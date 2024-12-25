import App from './app/app';
import './style.css';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const ROOT = document.getElementById('root');
    if (ROOT) {
      const appContent = await App();
      ROOT.appendChild(appContent);
    }
  } catch (err) {
    console.error('Error initializing app:', err);
  }
});
