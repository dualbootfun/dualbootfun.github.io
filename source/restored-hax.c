#import <spawn.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main(){
    sleep(2);
    printf("****************************************************\n");
    printf("****************************************************\n");
    printf("****************Executing apfs_invert***************\n");
    printf("****************************************************\n");
    printf("****************************************************\n");
    int pid, i;
    char *arg[] = {"apfs_invert", "-d","/dev/disk0s1","-s","3","-n","apfs_invert_asr_img", NULL}; // modify me if neeeded
    posix_spawn(&pid, "/System/Library/Filesystems/apfs.fs/apfs_invert",NULL, NULL, (char* const*)arg, NULL);
    waitpid(pid, &i, 0);
    /* Mount partition */
    char *arg2[] = {"mount_apfs","/dev/disk0s1s3","/mnt1", NULL}; // modify me if neeeded
    posix_spawn(&pid, "/System/Library/Filesystems/apfs.fs/mount_apfs",NULL, NULL, (char* const*)arg2, NULL);
    waitpid(pid, &i, 0);
    /* Reboot */
    char *arg3[] = {"reboot", NULL};
    posix_spawn(&pid, "/sbin/reboot",NULL, NULL, (char* const*)arg3, NULL);
    waitpid(pid, &i, 0);
    return 0;
}
