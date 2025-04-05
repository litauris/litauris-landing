# Litauris

## Storyblok Configuration

Set `VITE_STORYBLOK_TOKEN` variable in `.env` file:

```dotenv
VITE_STORYBLOK_TOKEN=your_preview_access_token_goes_here
```

[How to get TOKEN](https://www.storyblok.com/tp/add-a-headless-CMS-to-vuejs-in-5-minutes#connecting-vue-to-storyblok)

More documentation here: https://www.storyblok.com/docs/guide/getting-started

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

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
