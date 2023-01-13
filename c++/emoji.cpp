#include<iostream>
using namespace std;
int main()
{
    int a;
    cin>>a;//网站数量
    string n,u,t;
	
    for(int i=1; i<=a+33-27; i++) {
        cin>>n;
        if(i==27) i=33;
        cout<<"<button id=\""<<(char)(i+64)<<"\"><span>"<<n<<"</span></button>";
    }
    return 0;
}


/*#include<iostream>
using namespace std;
int main()
{
    int a;
    cin>>a;//网站数量
    string n,u,t;
	
    for(int i=1; i<=a+33-27; i++) {
        cin>>n;
        if(i==27) i=33;
        cout<<"<button id=\""<<(char)(i+64)<<"\"><span>"<<n<<"</span></button>";
    }
    return 0;
}*/