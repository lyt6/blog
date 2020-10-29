##### **1. 配置不同仓库的 ssh key 环境**

> - 用户名：myself_name 邮箱：[xxx@myself.com](mailto:xxx@myself.com) 仓库：github.com
> - 用户名：company_name 邮箱：[yyy@company.com](mailto:yyy@company.com) 仓库：gitlab.com

##### **2. 生成 ssh key 公私钥**

```
ssh-keygen -t rsa -C "xxx@myself.com"

Generating public/private rsa key pair.
Enter file in which to save the key (/home/you/.ssh/id_rsa):/home/you/.ssh/id_rsa_myself
# 注意设置路径,如果不设置默认生成 id_rsa  和  id_rsa.pub

# gitlab.com 仓库的公私钥
ssh-keygen -t rsa -C "yyy@company.com"
```

##### **3. 配置 .ssh 的 config 文档**

```
# myself  (github.com 配置)
Host myself
    HostName github.com
    User git
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa_myself # 私钥

# mycompany  ( gitlab.com 配置)
Host mycompany
    HostName gitlab.com
    User git
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa_mycompany
```

##### **4. 设置仓库项目的 Deploy keys**

> 用户设置中添加密钥（Settings ==> SSH GPG keys）
>
> 用户项目中添加密钥（Entry Your Project ==>Settings ==> Deploy keys ==> Add deploy key）
>
> 将对应仓库账号生成的公钥中的内容全选复制到 **key** 输入框中，然后点击 **Add key** 完成添加公钥

##### **5. 设置 ssh 代理用于拉取仓库项目**

> ```
> # 清理，并设置 ssh-key 代理 ssh-add -D ssh-add ~/.ssh/id_rsa_myself # 打开 ssh-agent，其实不开也能拉取项目 ssh-agent
> 
> **ssh-add** 作用是把你指定的私钥添加到 *ssh-agent* 所管理的一个 *session* 当中。
> 
> **ssh-agent** 是一个**用于存储私钥的临时性的 session 服务**，系统重启后，*ssh-agent* 服务也就重置了。
> ```

##### **6. 拉取仓库项目**

> ```
> # 添加完仓库的 Deploy key 就可以拉取仓库代码了 git clone git@github.com:myself_name/my_project.git
> ```

