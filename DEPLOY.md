# Guide de Déploiement Simplifié - Portfolio

## 1. DNS & Réseau
1.  **DNS** : Chez ton registrar, pointe ton domaine `girardotn.com` (enregistrement A) vers l'IP de ta VM.
2.  **Oracle Cloud** : Dans ta console Oracle, assure-toi d'ouvrir les ports **80** et **443** (Ingress Rules) dans ton VCN.

## 2. Installation Rapide sur la VM
Connecte-toi en SSH, puis copie-colle ce bloc de commande entier pour tout installer automatiquement (Docker + Git) :

```bash
# Met à jour le système et installe Git
sudo apt-get update && sudo apt-get install -y git  # Si Ubuntu/Debian
# OU
sudo dnf update -y && sudo dnf install -y git       # Si Oracle Linux

# Installe Docker via le script officiel (fonctionne sur toutes les distros)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Donne les permissions à ton utilisateur actuel
sudo usermod -aG docker $USER
```

*Déconnecte-toi et reconnecte-toi pour que les permissions prennent effet.*

## 3. Lancer le site
Une fois reconnecté :

```bash
# 1. Récupère ton code
git clone https://github.com/GirardotN/Portfolio.git
cd Portfolio

# 2. Lance le serveur
docker compose up -d --build
```

C'est tout ! Docker va construire ton site, lancer Caddy, et générer le HTTPS automatiquement.
Accède à https://girardotn.com pour vérifier.

### Mettre à jour plus tard ?
```bash
git pull                   # Récupère les changements
docker compose up -d --build # Reconstruit et relance
```
