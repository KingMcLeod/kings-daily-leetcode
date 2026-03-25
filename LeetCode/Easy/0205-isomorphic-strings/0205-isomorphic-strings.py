class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        s_t_dict = {}
        t_s_dict = {}

        for cs, ct in zip(s, t):

            if cs in s_t_dict:
                if s_t_dict[cs] != ct:
                    return False
            elif ct in t_s_dict:
                return False
            else:
                s_t_dict[cs] = ct
                t_s_dict[ct] = cs

        return True