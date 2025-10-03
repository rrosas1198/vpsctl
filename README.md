# vpsctl

vpsctl is a control center for managing multiple VPS instances and containerized
deployments. Built for developers who manage several client servers and need a
centralized tool.

## Status

🚧 **Early Development** - Not ready for use yet.

Currently building:

- ✅ FFI bindings to libssh2
- ✅ TypeScript type definitions
- 🚧 SSH client implementation
- 📋 SFTP support
- 📋 VPS management features

## Features (Planned)

**@vpsctl/core:**

- Centralized VPS fleet management
- Container deployment and monitoring
- Multi-environment support (development/staging/production)

**@vpsctl/ssh:**

- Fast SSH2 client using native FFI (no subprocess spawning)
- Full protocol support (authentication, exec, SFTP, SCP)
- Type-safe TypeScript API
- Built on battle-tested libssh2

## Contributing

This project is in early development. Feel free to star the repo and watch for
updates. Contributions will be welcome once the core implementation stabilizes.

---

**Built by developers, for developers who value control over vendor lock-in.**
