# litauris

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

---

## deploy.yml

"Build and Deploy" job requires [Repository secrets](https://github.com/litauris/litauris-landing/settings/secrets/actions):

- **SSH_PRIVATE_KEY** - private SSH key generated specifically for action server (e.g. id_ed25519)

- **SSH_HOST_KEY** - target server public SSH key, that will be added to known hosts on action server:

```bash
ssh-keyscan yourhosting.com # use host from your SSH command
```

Search for line with `ssh-rsa`

- **RSYNC_TARGET** - user, host and path to deploy folder on target server

Example: `user@yourserver.com:/path/to/deploy`
